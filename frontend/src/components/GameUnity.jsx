<<<<<<<<< Temporary merge branch 1
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
=========
import React, { Fragment } from 'react'
import { Unity, useUnityContext } from "react-unity-webgl";

const GameUnity = () => {
    const { unityProvider, unload  } = useUnityContext({
        loaderUrl: "gewr/Build/gewr.loader.js",
        dataUrl: "gewr/Build/gewr.data",
        frameworkUrl: "gewr/Build/gewr.framework.js",
        codeUrl: "gewr/Build/gewr.wasm",
      });

	async function handleClickBack() {
		await unload();
		navigate('/plan');
		// Ready to navigate to another page.
	}

      return ( 
      
        <Fragment>
          <Unity 
            style={{
          width: "60%",
          justifySelf: "center",
          alignSelf: "center",
          }}
          unityProvider={unityProvider} />
          <button onClick={handleClickBack}>Back</button>
        </Fragment>
      
      );
>>>>>>>>> Temporary merge branch 2
}
