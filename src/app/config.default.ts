/**
 * @WORKAROUND: allow get custom configuration without injecting
 * everitime a provider.
 *
 * Settings must be included in config var.
 */
export function config(key) {
   let config =  {
       'apiUrl': 'http://localhost:8000/api'
   }
   return typeof(config[key]) !== 'undefined' ? config[key] : null
}
