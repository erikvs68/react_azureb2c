import axios from 'axios'

axios
	.get('http://example.com/api/resource')
	.then((response) => {
		console.log(response.data)
	})
	.catch((error) => {
		console.error('Error during API call', error)
	})
