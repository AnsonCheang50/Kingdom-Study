import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Unity, useUnityContext } from 'react-unity-webgl';

import { setUnloadGame } from '../features/site/siteSlice';
import { selectCurrentPage } from '../features/site/siteSlice';

const GameUnity = () => {
	const { unityProvider, unload } = useUnityContext({
		loaderUrl: 'gewr/Build/gewr.loader.js',
		dataUrl: 'gewr/Build/gewr.data',
		frameworkUrl: 'gewr/Build/gewr.framework.js',
		codeUrl: 'gewr/Build/gewr.wasm',
	});
	const navigate = useNavigate();
	const page = useSelector(selectCurrentPage);

	const [currPage, setCurrentPage] = useState(page);

	useEffect(() => {
		if (currPage !== 'game') {
			unload();
		}
	}, [currPage]);

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
