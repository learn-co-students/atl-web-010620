class User

    attr_reader :username

    def initialize(username)
        @username = username
    end

    def tweets
        Tweet.all.select {|tweet| tweet.user == self}
    end

    def post_tweet(message)
        # that takes a message- takes a/takes in = argument 
        # creates a new tweet
        Tweet.new(message, self)
        #adds it to the user's tweet collection
    end

end


