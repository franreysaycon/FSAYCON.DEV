---
title: 'NextJS: Experiences and Pains'
date: '2021-05-28'
duration: '10 minutes'
tags: 'Frontend Development, React, Javascript, Next'
description: "In this blog, I share my experiences and pains when working with Next."
---

When you hear Next or NextJS, the concept of server-side rendering comes immediately right after. Essentially, it introduces the paradigm of generating an initial HTML from your React code before the said HTML even reaches your client. This is advantageous for your users as they can see an initial view immediately at first load. Unlike in vanilla React, typically CRA, the client needs to download a nearly-blank index.html then download the corresponding React modules before ever seeing anything. 

Next is a React framework made by Vercel. As you may know, React is not enough for most modern web applications as it's only a view library. Next addresses some of the core missing components such as routing, build time optimizations for images and code splitting across routes, server-side rendering out of the box, frontend-first serverless functions, and many more. It's my go-to for almost all my e-commerce projects that need a marketing side as well as a core application. It's a complete and stable solution that can produce static generated sites through exporting! Not to mention, it's still React! You can combine almost anything you want.

# The Experiences

This is actually the third React paradigm that I introduced myself into. I am definitely biased that this is my go-to solution for most problems that I encounter if I want my application to be future-proof and have a good developer experience. It is supported out of the box when you want to deploy at Vercel. You can import CSS and images if you want to as it's supported in their bundling process. The fact that I can easily create serverless functions as easy as defining a route in a specific folder (API) makes it sweeter to use. Zero configs for the win!

Let's talk about routing first and foremost. Frontend routing is definitely a hard problem and can be the bane of the existence of most developers. That's why it's a silver lining that libraries exist for this kind of problem even more so if there's an opinionated way to do it! You get that from Next. 

In Next, we make use of a folder structure paradigm to define our routes. We have a pages folder where we define other folders and JS/TS files that will ultimately be the routes of your application. Now, many opinions go against this paradigm. But for me, it introduces a straightforward structure that just makes sense! We can even introduce different characters within our filenames such as `...` (for spread syntax, meaning this file has more than one route) and `[id]` to define request parameters like `companies/1234`. 

The same folder structure paradigm exists for the defining of the serverless functions! Just create a folder of `api` under your pages folder. Defining a `companies.js` in the api folder would mean you have an api route of `/api/companies`! Easy right? I'm sure you can learn more about that [here](https://nextjs.org/docs/routing/introduction).

I find this routing experience better than defining router definitions across different files which are typical in CRA. In the topic of CRA, you can actually organize it in a way that it's not a problem but since it's not enforced, there's room for error unless you incorporate an automated way to restrict this. Under Next's paradigm though, at one glance, you can easily trace the routes of your application and it's easy to reverse engineer. Since this is an opinionated paradigm, you rest assured this is the only routing you have to worry about unless for some reason your developers installed a router in one of your components of which hopefully your frontend reviewers know better.

Here's a typical NextJS pages folder structure of a simple social media application with a homepage, user page, and search page complete with authentication, searching, and profile functionality. We use next-auth library for the authentication needs and that routing definition is under the library's paradigm.

!["Sample NextJS Pages Structure"](/nextjs-experiences-and-pains/1.png)

I love Next for its customizability and near barebone approach to its open APIs. If you intend to edit how Next builds your pages, Next has specific files such as `_app.js`, `_document.js` that can help you achieve your desired server-side rendered or exported HTML pages. Although Next flags zero-configuration, it doesn't shy away from customization. You could create your own `.babelrc` or even webpack configurations and make use of `next.config.js` to furthermore influence the bundling or build step of the framework. There was no need for any ejections to do this! I didn't have a hard time learning the lifecycle because of its straightforwardness. These exposed APIs closely resembles how your index React component might look like. You didn't have to worry about memorizing a specific API function for you to achieve your desired effects under this paradigm since all you have to do is override the actual components themselves.

You may export specific lifecycle functions in your page component to create initial states to furthermore improve the rendered HTML. Dependent on your use case, you might use `getStaticProps` along with `getStaticPaths` or `getServerSideProps`. I love the fact that I could build or fetch the different data that I need for the initial view immediately since the alternative is showing a loading view first which doesn't make sense for a blog such as this one. (Click [here](https://fsaycon.dev/blog/how-i-built-my-blog-with-nextjs) to see how this blog was created.) Be careful though! This doesn't mean this should be the default as being trigger happy with these lifecycle APIs will impact your build time or first contentful paint especially if the operations you defined are dependent on network latency or simply a heavy calculation.

TLDR; use Next if you want to,
- Have an SSR solution out of the box and the benefits it contains.
- Have an SSG to follow the JAMStack architecture
- Implement frontend first serverless functions to speed up your development
- Use an opinionated framework with high customizability without ejection
- Have route-level code-splitting supported out of the box.
- Support an existing routing paradigm.

# Pains

There are benefits to having an opinionated framework especially if you're in an environment that has high volatility commonly seen in firms with a per-project business model. I'm all for advocating opinionated frameworks in those circumstances but it increases complexity and adds more steps to the learning ladder. In my experience, when I want to teach it, I found it longer to onboard unlike if we stick as close to vanilla React which is the constant. 

The routing paradigm of Next can be a bit of a learning curve. Although, I'm a big fan of it. I recognized a learning curve within developers who didn't experience such a paradigm who was used to react-router-dom or @reach-router for routing their React applications. Since Next is highly opinionated about its routing, there will be hardships for functionalities that require you to customize the said routing paradigm such as creating a prompt for pausing navigation. You are stuck with this routing paradigm and it is discouraged for you to mix other routing solutions as it might introduce unwanted side effects to your application. 

These routing solutions rely on the history API. Introducing different routing solutions will induce different histories if not handled properly. We actually tried to create a POC of adding react-router for client-side only routes on a specific page in Next. Long story short, we wasted our time because they are simply not compatible although we made it work in simple cases but when we needed to navigate across react-router routes and Next routes that's when the bugs swarmed our application.

If you are not aware, you may also use Next as a static site generator. Utilizing the build step to create your next server, you may choose to export your application and make Next build all your static assets ready to be deployed to SSG cloud providers like Netlify, S3, or instances with Nginx. Unfortunately, there are some limitations. 

I mentioned we tried to mix in react-router in the client-side routing it's because we were trying to make Next work as an SSG with a lot of nested dynamic routes. e.g. `company/[id]/employees/[id]`. It didn't make sense for us to fetch possible millions of companies or employees at build time nor is it advisable since new ones get added at any given time. We realized Next is not capable to build wildcard HTML in its SSG paradigm as we have to define the actual routes and different static data the corresponding HTML might need. Although there's incremental static regeneration, it is still not enough for app-specific logic like these with high variability. It only mostly makes sense for apps in the same nature as a blog like these. You have to use the SSR route to get your sigh of relief! But unfortunately, you can't extract the benefits of the JAMStack architecture in this paradigm. :(

The last pain is about "speed". Although, the open-source community is always producing ways to make our jobs faster and easier. Next's near barebone approach (although again, I'm a big fan of it) may not be a great idea for sites that needs to be created with speed and templates in mind. Obviously, this is moot for developers who are fast themselves but let's say you can't copy-paste any boilerplate code and just use Next as it is. Next don't have the plugin ecosystem that Gatsby has that can help in producing sites with near WordPress-like speeds when it comes to theming, manifests solutions, and support for server-side handling of stylesheets. You need to manually edit the different core files for these to be done and if there exists any "plugin" like functionality it involves modifying the `next.config.js` file such as adding PWA functionality with `next-pwa`. 

TLDR; don't use Next if you want to:
- Use an opinionated framework
- Use other routing paradigms.
- Have a more flexible SSG solution
- Have a better ecosystem for incorporating other built solutions.*

*Although technically, you can mix anything you want it might not just be straightforward and might be incompatible.

---

I simply love Next despite its limitations. If my software skills were a set of weapons, this is the bazooka that can blow away most hardships or tanks with cannons pointed at me. I definitely like the fact that although it's a framework, it's not as abstracted compared to other solutions out there. Hope you gained insights from my experiences and pains with Next. This blog is actually written in Next. Check this [link](https://fsaycon.dev/blog/how-i-built-my-blog-with-nextjs) out to read more about it!