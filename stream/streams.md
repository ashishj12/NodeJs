**NodeJs Streams**

* Streams are a fundamental concept in Node.js applications, enabling efficient data handling by reading or writing input and output sequentially. They are handy for file operations, network communications, and other forms of end-to-end data exchange.

* Let’s take a “streaming” services such as YouTube or Netflix for example: these services don’t make you download the video and audio feed all at once. Instead, your browser receives the video as a continuous flow of chunks, allowing the recipients to start watching and/or listening almost immediately.

**Types of Streams**

* Writable: streams to which we can write data. For example, fs.createWriteStream() lets us write data to a file using streams.
* Readable: streams from which data can be read. For example: fs.createReadStream() lets us read the contents of a file.
* Duplex: streams that are both Readable and Writable. For example, net.Socket
* Transform: streams that can modify or transform the data as it is written and read. For example, in the instance of file-compression, you can write compressed data and read decompressed data to and from a file.


**Methdos in Streams**

* data : data is available to read.
* end : no data to read
* error : receive any error
* finish : flush all the data

