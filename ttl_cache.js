class TTLCache {
    
    constructor() {
        this.cache = new Map();
    }

    // Add a key-value pair to the cache with a specified TTL in milliseconds
    set(key, value, ttl) {
        const expirationTime = Date.now() + ttl;

        // Store the value along with the expiration time in the cache
        this.cache.set(key, { value, expirationTime });

        // Set a timeout to remove the value from the cache when the TTL expires
        setTimeout(() => {
            this.cache.delete(key);
        }, ttl);
    }

    // Get the value associated with a key from the cache
    get(key) {
        const entry = this.cache.get(key);

        if (entry && entry.expirationTime > Date.now()) {
            return entry
        }

        // If the entry has expired or does not exist, return undefined
        return undefined;
    }

    // Remove a key-value pair from the cache
    delete(key) {
        this.cache.delete(key);
    }

    // Clear all entries from the cache
    clear() {
        this.cache.clear();
    }
}

module.exports = TTLCache