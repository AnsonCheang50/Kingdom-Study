import React from 'react'
import { Unity, useUnityContext } from "react-unity-webgl";

const GameUnity = () => {
    const { unityProvider } = useUnityContext({
        loaderUrl: "../gewr/Build/gewr.loader.js",
        dataUrl: "../gewr/Build/gewr.data",
        frameworkUrl: "../gewr/Build/gewr.framework.js",
        codeUrl: "../gewr/Build/gewr.wasm",
      });
      return <Unity 
      style={{
        width: "80%",
        justifySelf: "center",
        alignSelf: "center",
      }}
      unityProvider={unityProvider} />;
}

export default GameUnity