const TTLCache = require('./ttl_cache');

// Example usage:
const cache = new TTLCache();

// Set a value with a TTL of 5 seconds
cache.set('foo', 'bar', 5000);

// Get the value associated with the 'foo' key
console.log(cache.get('foo')); // Output: 'bar'

// Wait for 5 seconds to expire
setTimeout(() => {
  // Try to get the value associated with the 'foo' key again
  console.log(cache.get('foo')); // Output: undefined
}, 5000);