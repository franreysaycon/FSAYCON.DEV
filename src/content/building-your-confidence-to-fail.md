---
title: 'Building Your Confidence To Fail'
date: '2021-02-11'
duration: '15 minutes'
tags: 'DevOps, Sofware Architecture, Best Practices, Dev Culture'
description: 'Software engineering in a nutshell demands that you produce an output as fast and as stable as possible. My approach to this discipline is building my confidence to fail.'
---

The world of IT is everchanging faster than ever. When you have a software product that you want to be ahead in the market, it's in your best interest that this is of quality, user-friendly and can grow as fast as possible. It follows that your company practices the best known standards in developing, deploying, and scaling software. Many would argue what that "best" standards are. But for me, to keep things simple in my head, it always has just been building my confidence to fail. So what does that mean?

I'm not sure about anybody else but software engineering for me in general is very anxiety inducing especially when it comes to putting what you built out there. My goal has always been to architect the software and build our operations in such a way that I and my team will have confidence to fail. Se where I am getting at? Here are some tips to build that confidence.

---

# Have backups!

Just like save points in video games, backups serve as a way for developers to go back to a point in time for a certain resource. Usually we do this with the codebase through git, configurations, database dumps, CI/CD variables and anything static such as frontend assets that when changed could cause problems to the application at hand. All of these should be automated as much as possible.

In normal operations, it's a great idea to have server and deployment backups. For example, in a JAMStack architecture, whenever we deploy our frontend assets we keep the previous version of assets as a backup just in case we need to do a quick revert if something goes wrong. In terms of servers, depending on your strategy and budget, you could have CI/CD generated installable artifacts that can be quickly fed to an empty server when your main resource server crashes, also called as cold backups or a working server that is as close to your main server where traffic can be routed to when the something goes wrong.

Backups has always been an integral part of software development. You can't create grow confidently without a fail safe.

---

# Deploy major features only when you have a rollback and release plan

It's a known fact of life that you need a plan to achieve whatever life accomplishments you want to attain. Other people leave it out to chance. But in software engineering, do you want to leave your investments carelessly out to chance?

I'm not saying you can plan for everything. Reality will always remain unpredictable. Things would fail regardless of how much careful you are. That's why there's two parts of the plan, a rollback and a release.

Release is straightforward. It gives the steps on how you would deploy your feature. It could be as simple us just merge it to master or staging then let the CI do the work but most of the time, major features involves a maintenance hour that includes changes to the database, running some sort of populating script, integrating new services to your message broker, or simply a major refactor of existing code. This stage also includes the defining and creation of different backups such as database dumps or broker configurations, etc. which is crucial to the next part of the plan. To make sure that you don't miss anything or at least lessen the chance, it's proper that you have a plan that you can follow and people can review.

There are different release strategies out there such as A/B release where you randomly select a population of users that can access your new features while others remain status quo. So if things fucks up, only a handful of users get frustrated and not to mention you could gather stats on that small population first whether or not that new feature is worth the trouble. You could use this same concept to just deploy your major features in one of your scaled servers and see where it goes. Whatever your release strategy is, it should be included in the plan.

Of course, no matter how much planning you do and no matter how many looks at your plan, there will still be a chance things will go wrong. That's where the rollback plan comes in. From the definition of the word, this is a plan wherein you revert everything back to the moment before your major release. It could be as simple as revert master back to a certain commit hash then deploy but often than not, as described above there could more steps to this.

There are also, many different rollback strategies out there but it's often hand in hand with whatever your release plan was. One of such strategies, is blue-green deployment wherein it states that you have two production environments as similar as possible. Of which, you could release to one environment and in the case that causes a crash, you could immediately route everything to the other environment that is in the state before the release which essentially your rollback.

Having a release and rollback plan as a practice in my experience helps in onboarding and upskilling your people as well. It has insights on the architecture where a developer can pretty much deduce how everything works and what to watch out for. It empowers developers that are not familiar with the whole stack to be able to create a plan for their release as other seniors will review such plan which enables a more collaborative and quality-focused environment or culture.

---

# Maintain an acceptance testing sheet

Acceptance testing is the bread and butter for delivering your product. This contains all the functionalities that are currently available and is expected to be working. It is recommended that you create acceptance criterias with every page or every epic to keep things focused and manageable.

We use this sheet as the reference for our definition of dones especially if this is a big release. This is much more crucial when we are on the verge of delivering the finished product so clients can check whether what was expected are completed as well as working accordingly. I can't imagine not having this in major refactors, environment migrations, where the product should remain status quo as much as possible. This also serves as documentation for future onboarding as well.

---

# Create automated tests!

Manual testing might be enough in small applications but at scale it has a high chance of eluding bugs. There's a good chance you would be deploying a lot everyday as well dependent on your scale which would make manual testing near impossible to cover the whole application. Is there a better way? Of course, automated tests!

One automated test we are very familiar of are unit tests. These are tests that focuses on a specific module of your code and usually ran in the CI whenever a developer changes such module. Having such test, would enable a developer to be aware of any breaking changes he/she created. A step a higher of this, are integration tests as well as end to end tests. All of which are automated which just varies on how frequent we want them to run.

Another one that's almost mandatory for fast growing applications, are robots. Quality assurance engineers are tasked to create automated robot scripts wherein they define step by step on how this script would interact with the view of whatever test case they are trying to achieve as if they were doing it manually. This is then placed inside a scheduling software that supports monitoring and notifications that would run this as frequent as possible to heighten responsiveness to whatever breaking change reached production.

---

# Practice an Honest and Collaborative Dev Culture

This is what most big companies miss in my experience since bureaucracy often overpowers. Building an honest and collaborative culture among your development teams, would empower your developers to raise concerns and learn from each other as efficiently as possible. Problems get revealed early rather than growing behind the scenes that would lead to demotivated developers and high employee mortality rates.

In my team, I practice the "no stupid question rule" to make sure that everyone is comfortable in expressing the truth. I want them to have their own opinions since every person has a blind spot. We work as a team to make sure we lessen the chances of making mistakes by putting more heads to the problem. I pair program and explain stuff in detail as much as possible to empower them in handling problems on their own. We don't need superheroes, we need a team that works together.

At the end of the day, the developers are the ones that produces output and it follows we need to take care of them. We should invest in them as well as the culture we inculcate as it has direct influence to their productivity and growth in the company.

---

I'm sure I just listed some of the ways you could build your confidence to fail. There are other practices out there but the bottom line is, you want your product to grow fast and as stable as possible and to do that, you need to build your confidence to fail. That's software engineering for me in a nutshell.
