# REST-vs-gRPC

# Comparing gRPC and REST performance on Node.js
Let's compare performance (time to make 50k requests) of tow inter-service communications on Node.js microservices.
- REST http + Keep-Alive (JSON)
- gRPC (Protobuf)

## How I test
I use two instances in the localhost network of my computer. Each instance starts Node.js app in a single process. Service-A (client) sends 50k of sequential requests to the Service-B (server).

### REST test
Service A (client)
- Ubuntu 18.04.4 LTS
- Node v12.16.1 LTS
- request v2.88.0

Service B (server)
- Ubuntu 18.04.4 LTS
- Node v12.16.1 LTS
- express v4.16.4

### gRPC test
Service A (client)
- Ubuntu 18.04.4 LTS
- Node v12.16.1 LTS
- grpc v1.18.0
- @grpc/proto-loader v0.4.0

Service B (server)
- Ubuntu 18.04.4 LTS
- Node v12.16.1 LTS
- grpc v1.18.0
- @grpc/proto-loader v0.4.0
