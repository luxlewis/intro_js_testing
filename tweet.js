class Tweet {
  constructor(sender, content, likes, retweets, replies, replyCount) {
  this.sender = sender;
  this.content = content;
  this.likes = 0;
  this.retweets = 0;
  this.replies = [];
  this.replyCount = 0;
  }
  like() {
    this.likes += 1;
  }
  retweet() {
    this.retweets += 1;
  }
  reply(reply) {
    this.replies.push(reply);
    this.replyCount += 1;
  }
}


module.exports = Tweet;
