Rails.application.routes.draw do
  resources :books
  resources :users

  post '/signup', to: 'users#create'
  post '/login', to: 'sessions#create'
  post '/logout', to: 'sessions#destroy'
end
