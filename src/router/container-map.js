export default {
  Account: (location, callback) => { 
    require.ensure([], require => { 
        callback(null, require('containers/account/index.js').default) 
      }, 'Account')
    },
  Media: (location, callback) => { 
    require.ensure([], require => { 
        callback(null, require('containers/media/index.js').default) 
      }, 'Media')
    }
}