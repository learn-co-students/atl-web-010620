class BooksController < ApplicationController

    get '/books' do
        @books = Book.all
        erb :'books/index.html'
    end

    post '/books' do
        # going to get you started with params hashes- look how we're using hashes here
        @book = Book.new(title: params['book']['title'], snippet: params['book']['snippet'])
        @book.save
        redirect to "/books" 
    end

    get '/books/new' do
        # what can I do here to see all authors for dropdown? 
        erb :"books/new"
    end

    get '/books/:id' do
        @book = Book.find(params[:id])
        erb :'books/show.html'
    end

end