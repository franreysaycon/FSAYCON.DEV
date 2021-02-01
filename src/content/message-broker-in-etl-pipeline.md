---
title: 'A Message Broker Centric ETL Architecture'
date: '2021-01-31'
duration: '10 minutes'
---

One of the demands of maintaining an ETL pipeline is to address the scale to efficiently handle the load an organization needs. Dependent on the volume of the data, especially in the world of big data, extraction, transformation and loading of this data could take several days of which is most likely not ideal in the context of growth. Not to mention, there are use cases where this process must be done on demand as users use your applications especially if we are trying to form an accurate data set of or for your users.

Let's go through the journey of designing your ETL pipeline.

Let's say, we created one script for the whole ETL process and it's just scheduled through a cron or using a workflow manager tools like Airflow and Apache Kafka to schedule the run of these scripts. This is described by the image down below.

!["Simple one script architecture."](/message-broker-in-etl-pipeline/1.svg)

---

For simple datasets, one script is sufficient especially if the volume of data is in the realm of a few thousands. As long as, you practice proper bulk practices in the loading phases of your script, it's enough. You may also opt to create a pre-process step before the start of the ETL process to control the population in every bulk load in each iteration.

---

To allow simple parallelism, you may practice replication. It follows we create a configuration per replication to avoid processing similar bulks of data.

!["Simple replication of one script architecture."](/message-broker-in-etl-pipeline/2.svg)

---

The above implementation might be enough for a lot of cases but what if we want to scale the individual processes of the script independently? You might want to do this especially if one of the processes causes a bottleneck. Also, separation of these processes will enable better parallelism, introduce lesser coupling in the workers derived from every process involved in your ETL pipeline, and follows the principle of single responsibility which brings good benefits for future onboarding and development operations.

However, for this to be able to work, we would need a way for these workers to communicate to each other. This just becomes more complicated if these workers are scaled differently. How will we know which workers are free? How will we manage the activation of every worker? What if one service suddenly broke down? This is where a message broker comes in.

!["Separation of each process in ETL."](/message-broker-in-etl-pipeline/3.svg)

---

A message broker is a software that enables applications, systems and services to communicate with each other and exchange information. To have better appreciation of the role of this software in applications, let's take a look at the design pattern it introduces.

Let's define three terms first, the producer, consumer and queues.. To stay simple, a producer is in charge of producing a message for the message broker with the information of where it should go, what data it wants to be sent, as well as how it will be delivered. Once sent to a message broker, it will determine on which queues the message should be pushed. Queues are ordered collections of messages that is managed and defined in the broker.

A consumer on the other hand is a daemon process that listens to a specific queue, meaning if a producer intended to send a message to a queue that s consumer is listening to, that specific consumer will receive the said message of which when the consumer acknowledges the message, the broker will dequeue or remove the message from the queue otherwise dependent on the instructions for the message it will discard it or requeue it.

!["Simple ETL architecture with a message broker."](/message-broker-in-etl-pipeline/4.svg)

---

Now, our new architecture at the simplest will be like the image below. We can scale the individual services to however we want without worrying about integrity or coupling as everything is separate. We achieved communication across services. To create a scheduled run, all we have to do is create a script that a cron will run that will just send a message to the queue the first worker in the pipeline is listening to. This type of architecture will also pave way to supporting on demand ETL pipelines all we have to do is to send a message.

!["Increasing the scale per ETL process with a message broker."](/message-broker-in-etl-pipeline/5.svg)

Here's a possibility of what you could do with this kind of architecture. If for some requirement, you have a third party service that you need to contact to produce a certain data that needs time to finish, such as on-demand scraping of specific social media account, and cybersecurity evaluation of a domain, etc. And, you want this to be fully automated to be integrated with your ETL process in addition to whatever scheduled scans you would have from the data source!

I won't be discussing best standards of ETL in this article but take note that we have a concept of a staging area as a playground or an intermediate storage area used for data processing during the extract, transform and load process. I also design my ETL in a way that I could rerun any of the process with the artifact from the staging area just in case in a point in time there's an error in the actual process. Message brokers , dependent on the software you used, are built to store messages (even in failure) that are not processed and there are paradigms to handle rejected messages for the perusal of the developer.

!["An example of a complete web app architecture with on-demand ETL."](/message-broker-in-etl-pipeline/6.svg)
