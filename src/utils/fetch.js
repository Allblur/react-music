import fetch from 'isomorphic-fetch'

const baseURL = 'http://odetoall.applinzi.com/weixin'

function toQueryString(params) {
	const array = []
	for (const key in params) {
		if (params.hasOwnProperty(key)) {
			let str = `${key}=${params[key]}`
			if (str !== '=') {
				array.push(str)
			}
    	}
  	}
	return array.join('&')
}

function fetchApi(url, args) {
	let apiUrl = `${baseURL}${url}`

	if (args && typeof args === 'object' && args['params']) {
		apiUrl = `${apiUrl}?${toQueryString(args['params'])}`
	}

	return fetch(apiUrl).then(res => res.json())
}

export default fetchApi