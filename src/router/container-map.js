export default {
  Account: (location, callback) => { 
    require.ensure([], require => { 
        callback(null, require('containers/account/index.js').default) 
      }, 'Account')
    }
}