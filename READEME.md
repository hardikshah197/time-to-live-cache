# Time to live (TTL)

## TTL in networking
Time to live (TTL) in `networking` refers to the amount of time or “hops” that a packet is set to exist inside a network before being discarded by a router. TTL is also used in other contexts including CDN caching and DNS caching.

It is an 8-bit binary value set in the header of Internet Protocol (IP) by the sending host. The purpose of a TTL is to prevent data packets from being circulated forever in the network. The maximum TTL value is 255. The value of TTL can be set from 1 to 255 by the administrators

## How time-to-live (TTL) Works?
The number of hops a packet travels before being discarded by a network is known as the time to live (TTL) or hop limit. The maximum range for packets is indicated by TTL values.

1. The sending host sets the initial TTL value as an eight binary digit field in the packet header. 
2. The datagram’s TTL field is set by the sender and reduced by each router along the path to its destination. 
3. The router reduces the TTL value by at least one while forwarding IP packets. 
4. When the packet TTL value hits 0, the router discards it and sends an [ICMP message](https://www.cloudflare.com/learning/ddos/glossary/internet-control-message-protocol-icmp/) back to the originating host.
5. This system ensures that a packet moving via the network is dropped after a set amount of time, rather than looping indefinitely.

## TTL in caching
The Browser `Cache` Time To Live (TTL) is the amount of time the end-users browser will cache a resource. This resource will be served from browser local cache until the TTL expires, after which the browser will request the asset again.

This project contains the POC for the caching in TTL only.

## Explaination 
This project contains two files, ttl_cache and index files.
### ttl_cache:
This code defines a TTLCache class that represents a simple cache with a TTL-based eviction policy. The class has several methods to manipulate the cache:

`constructor()`: This method initializes an empty Map to store key-value pairs in the cache.

`set(key, value, ttl)`: This method adds a key-value pair to the cache with a specified TTL (time to live) in milliseconds. It stores the value along with the expiration time in the cache, and sets a timeout to remove the value from the cache when the TTL expires.

`get(key)`: This method returns the value associated with a key from the cache, if it exists and has not expired. If the key does not exist, or has expired, undefined is returned.

`delete(key`): This method removes a key-value pair from the cache.

`clear()`: This method removes all key-value pairs from the cache.

### Commands to run the project:
```bash
node index.js
```

### Output
![alt text](./asset/sample_output.png)

## Other Use cases of TTL with Javascript
There are many advanced use cases for implementing TTL in JavaScript. Here are a few examples:

- `Automatic data expiration` in a __caching system__: In a distributed caching system, you can use TTL to automatically remove data from the cache after a certain period of time to free up memory and ensure that the data is always up-to-date.

- `Session management` in __web applications__: You can use TTL to manage user sessions in web applications. When a user logs in, you can store their session data in a cache with a TTL. When the TTL expires, the user will be automatically logged out and their session data will be deleted from the cache.

- `Real-time bidding (RTB) systems`: In an RTB system, advertisers bid on ad inventory in real-time. To ensure that bids are processed quickly, you can use TTL to automatically remove stale bid data from the cache.

- `Time-based access control`: You can use TTL to enforce time-based access control in your application. For example, you can grant a user access to a resource for a limited time by storing their access token in a cache with a TTL.

- `Distributed task scheduling`: In a distributed system, you can use TTL to schedule tasks to run on different nodes. When a node receives a task, it can store it in a cache with a TTL. When the TTL expires, the task is automatically rescheduled to run on another node.

These are just a few examples of how TTL can be used in advanced use cases in JavaScript. The specific implementation of TTL will depend on the use case and requirements of your application


## Author
[@hardikshah197](https://github.com/hardikshah197)