---
title: 'Building Confidence To Fail'
date: '2021-02-11'
duration: '15 minutes'
tags: 'DevOps, Sofware Architecture, Best Practices, Dev Culture'
description: 'Chaos is part of the software engineering experience. To adapt, one must build confidence to fail.'
---

Growth is important for a product or service in the highly competitive IT World. It follows to achieve growth, one of the things that a company should consider is how they would be able to deliver features, integrate fixes and achieve high availability among its services. For the development team, this is a challenge as every production push might introduce bugs and cause these services to fail. What can one do? I for one follow a discipline of building my confidence to fail.

---

# Backups to the rescue!

Just like save points in video games, backups serve as a way for developers to go back to a point in time for a certain resource. This is important since in everyday operations a lot can go wrong and we would want a way to revert to a point in time that your service is working. The usual practices include having a codebase behind a git, scheduling database dumps, saving built frontend assets on every deployment, and many more.

Many practices involve hardware backups as well. Usually, we scale our services through replication to make sure if one service went down, another can take place. Not to mention, this would increase your server's capability to handle higher traffic.

To build my confidence to fail, I make sure my backups are automated and done as frequently as possible that resources can allow. I'd like to note that proper scaling practices/orchestration is a must for this discipline to work. It's not enough to just have backups but also to be able to use it as fast and as confidently as possible.

---

# Have you heard of a rollback and release plan?

Deploying major features involves most of the time manual intervention on databases, running pre-population scripts, setting up new services in the servers, and many more, unlike minor bug fixes that just involve you clicking that deploy button in your CI/CD, assuming you have already.

Just like with anything, not having a plan in how to integrate these major features will have a chance to result in a disaster. Although having a release plan doesn't guarantee anything. Reality will always remain unpredictable. That's why there are two parts of the plan, a rollback, and a release.

The release plan is straightforward. It gives the steps on how you would deploy your feature. As much as possible, you should list everything, the context of the feature, the specific steps of what to do, and more importantly, what environments will be affected. Writing everything down will also help you identify which parts of the stack you need to make a backup of in case things went array. Having such a document will enable other developers to review the plan as well, lessening the chance of mistakes.

Now, we go to the rollback plan. There is always a chance things will go wrong, but fear not, what you define here are the steps how you would revert everything.

There are many practices to practice rollback. It depends on how you did your release. If you lack resources, you might want to make sure that all of the steps that you created in your release plan can be reversed. For example, creating then restoring a backup dump of a database would enable you to reverse any database changes during the course of the release.

There are better release strategies that make rollback much easier but can be resource-intensive. One example of which is blue-green deployment. You have similar two production environments where you can route traffic to. You deploy on one, if things go wrong, reroute the traffic from the broken server to the other working one, if not, replicate and commit. There are many more out there.

To build my confidence to fail, I task my team and myself to create a release and rollback plan whenever a complicated feature needs to be pushed. At least one person should review it. This practice also empowers team members to increase their knowledge of the stack further improving the capabilities of a team for the future.

---

# Maintain an acceptance testing sheet

Acceptance testing is the bread and butter for delivering your product. In this process, we test the app or service for acceptability and evaluate the system's compliance with the business requirements.

It is advisable to create a document to track the features and their status. The QA or developers involve should maintain this sheet as this is the contract between your client and serves as the source of truth for whatever testing we want to do.

To build my confidence to fail, we maintain an acceptance testing sheet. Not to mention, this preserves context for support as well as ease future onboarding.

---

# Create automated tests!

Manual testing might be enough in small applications but at scale, it has a high chance of eluding bugs. There's a good chance you would be deploying frequently as well depending on your scale which would make manual testing near impossible to cover the whole application unless you have the resources for it. Is there a better way? Of course, automated tests!

One automated test we are very familiar with is unit tests. These are tests that focus on a specific module of your code and usually ran in the CI whenever a developer changes such a module. Having such a test would enable a developer to be aware of any breaking changes he/she created before their change becomes deployed. A step higher of this, are integration tests as well as end-to-end tests.

Another industry practice is the creation of a robot testing ecosystem. Quality assurance engineers are tasked to create automated robot scripts wherein they define step by step how this script would interact with the app of whatever test case they are trying to achieve as if they were doing it manually. This is then placed inside a scheduling software that supports monitoring and notifications that would run this as frequently as possible to heighten responsiveness to whatever breaking change reached production.

To build my confidence to fail, we integrate this testing philosophy into our applications. Dev operations are often fast-paced and we won't have time to manually test everything not to mention, we can't monitor a large application 24/7 that automated testing enables.

---

# Practice an Honest and Collaborative Dev Culture

This is what most big companies miss in my experience since bureaucracy often overpowers. Building an honest and collaborative culture among your development teams would empower your developers to raise concerns and learn from each other as efficiently as possible. Problems get revealed early rather than growing behind the scenes that would lead to demotivated developers, low productivity, and high employee mortality rates.

In my team, we practice the "no stupid question rule" to make sure that everyone is comfortable in expressing the truth. We want everyone to have their own opinions since every person has a blind spot. We work as a team to make sure we lessen the chances of making mistakes by putting more heads to the problem. I being the senior engineer, pair program and explain stuff in detail as much as possible to empower my team in handling problems on their own.

At the end of the day, the developers are the ones that produce output and it follows we need to take care of them. We should invest in them as well as the culture we inculcate as it has a direct influence on their productivity and growth in the company.

To build my confidence to fail, I practice this culture wherever I go. You would want a team to have your back and as empowered as you. We want to have a cohesive team rather than one amazing "superhero" developer.

---

I'm sure I just listed some of the ways you could build your confidence to fail. There are other practices out there but the bottom line is, you want your product to grow fast and as stable as possible and to do that, you need to build your confidence to fail.
