Git Glitched
============

Deploy to Glitch with a single `git push`.

Setup
-----

- Fork the Git Glitched [GitHub repo](https://github.com/noise-machines/git-glitched).
- Create a new Glitch project.
- In the top left corner of Glitch, click {Your Project Name} ❯ Advanced Options 🗼 ❯ Import From GitHub.
- Enter the name of your forked repository as the repo to import.
- In the Glitch sidebar, click 🗝 .env. Set the `SECRET` environment variable. 
- In the top left corner of Glitch, click {Your Project Name} ❯ Advanced Options 🗼 ❯ Open Console 📟.
- [Generate a new ssh key](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/#generating-a-new-ssh-key).
- Copy your newly-generated public key from `~/.ssh/id_rsa.pub`.
- [Set up that public key as a deploy key](https://developer.github.com/v3/guides/managing-deploy-keys/#deploy-keys) for your forked GitHub repo.
- In your forked repo, [set up a webhook](https://developer.github.com/webhooks/creating/) to POST to `{your-project-name}.glitch.me/deploy?secret={your-secret}`. Make sure `{your-secret}` matches the `SECRET` environment variable you set earlier in your Glitch project.

Now when you push to the glitch branch of your repo, it will automatically get deployed to Glitch 🎉

> ☠️ Be careful. This project only checks if the `secret` query param matches the `SECRET` environment variable. It will happily pull down any git repository, *including ones that don't belong to you*.

Made by [Thomas Bailey](https://twitter.com/noise_machines)
-----------------------

\ ゜o゜)ノ



An empty template project ready for your ideas and dreams.

Hit `Remix` above to start your own project with:

- [Fancy ES6 JavaScript via babel](https://babeljs.io/)
- [Asset bundling through webpack](https://webpack.js.org/)
- And [UI rendering with preact](https://preactjs.com/)

Remix this project and start editing `src/App.js` to instantly be making your app, awesome!

Technology Notes
----------------

This is the boilerplate I use for all of my web explorations. [Preact](https://preactjs.com/) provides the same React concepts and API in a much smaller package. It's a fast way of making fast websites.

If you'd like to use any React libraries from npm, you can easily mix them in with preact. All you have to do  is also add [preact-compat](https://github.com/developit/preact-compat).

This template doesn't have any sort of CSS pipeline, the CSS is defined raw in the front-end at `public/index.css`.

