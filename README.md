# BugReportEmotionJs
------------

1. Change Directory to `client/`
2. Install dependencies with `yarn install`
3. Run "NEW DEBUG", this will execute `bin/startWebpack.sh/` and run pwa-chrome. The nightly debugger is required for that config.
   Alternatively you can also just run `yarn debug` in `client/` and navigate to `http://localhost:8080/lobby`
4. It takes a bit of time for (only) one cursor to start lagging. Having the extension `dark reader` [dark reader](https://darkreader.org/) installed speeds that      process up significantly (It think now that this might be caused by the combination of Dark Reader + Emotion after the investigation)

The component that starts to lag is `MousePointer` in `client/src/components/Lobby/components/`. Changing line 23 to not be `css={css({})}` but just `style={{}}` oliviates the lag.
