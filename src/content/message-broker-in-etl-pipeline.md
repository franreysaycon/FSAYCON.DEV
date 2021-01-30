---
title: 'A Message Broker Centric ETL Architecture'
date: '2021-01-31'
duration: '10 minutes'
---

One of the demands of maintaining an ETL pipeline is to address the scale to efficiently handle the load an organization needs. Dependent on the volume of the data, especially in the world of big data, extraction, transformation and loading of this data could take several days of which is most likely not ideal in the context of growth. Not to mention, there are use cases where this process must be done on demand as users use your applications especially if we are trying to form an accurate data set of or for your users.

Let's go through the journey of designing your ETL pipeline.

Let's say, we created one script for the whole ETL process and it's just scheduled through a cron or using a workflow manager tools like Airflow and Apache Kafka to schedule the run of these scripts. This is described by the image down below.

---

For simple datasets, one script is sufficient especially if the volume of data is in the realm of a few thousands. As long as, you practice proper bulk practices in the loading phases of your script, it's enough. You may also opt to create a pre-process step before the start of the ETL process to control the population in every bulk load in each iteration.

---

To allow simple parallelism, you may practice replication. It follows we create a configuration per replication to avoid processing similar bulks of data.

---

The above implementation might be enough for a lot of cases but what if we want to scale the individual processes of the script independently? You might want to do this especially if one of the processes causes a bottleneck. Also, separation of these processes will enable better parallelism, introduce lesser coupling in the workers derived from every process involved in your ETL pipeline, and follows the principle of single responsibility which brings good benefits for future onboarding and development operations.

However, for this to be able to work, we would need a way for these workers to communicate to each other. This just becomes more complicated if these workers are scaled differently. How will we know which workers are free? How will we manage the activation of every worker? What if one service suddenly broke down? This is where a message broker comes in.

---

A message broker is a software that enables applications, systems and services to communicate with each other and exchange information. To have better appreciation of the role of this software in applications, let's take a look at the design pattern it introduces.

Let's define three terms first, the producer, consumer and queues.. To stay simple, a producer is in charge of producing a message for the message broker with the information of where it should go, what data it wants to be sent, as well as how it will be delivered. Once sent to a message broker, it will determine on which queues the message should be pushed. Queues are ordered collections of messages that is managed and defined in the broker.

A consumer on the other hand is a daemon process that listens to a specific queue, meaning if a producer intended to send a message to a queue that s consumer is listening to, that specific consumer will receive the said message of which when the consumer acknowledges the message, the broker will dequeue or remove the message from the queue otherwise dependent on the instructions for the message it will discard it or requeue it.

---

Now, our new architecture at the simplest will be like the image below. We can scale the individual services to however we want without worrying about integrity or coupling as everything is separate. We achieved communication across services. To create a scheduled run, all we have to do is create a script that a cron will run that will just send a message to the queue the first worker in the pipeline is listening to. This type of architecture will also pave way to supporting on demand ETL pipelines all we have to do is to send a message.
