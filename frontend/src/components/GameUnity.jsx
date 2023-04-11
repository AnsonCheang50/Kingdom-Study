import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { Unity, useUnityContext } from 'react-unity-webgl';

const GameUnity = () => {
	const { unityProvider, unload } = useUnityContext({
		loaderUrl: 'gewr/Build/gewr.loader.js',
		dataUrl: 'gewr/Build/gewr.data',
		frameworkUrl: 'gewr/Build/gewr.framework.js',
		codeUrl: 'gewr/Build/gewr.wasm',
	});

	const navigate = useNavigate();

	async function handleClickBack() {
		await unload();
		navigate('/plan');
		// Ready to navigate to another page.
	}

	return (
		<Fragment>
			<Unity
				style={{
					width: '60%',
					justifySelf: 'center',
					alignSelf: 'center',
				}}
				unityProvider={unityProvider}
			/>
			<button onClick={handleClickBack}>Back</button>
		</Fragment>
	);
};

export default GameUnity;
