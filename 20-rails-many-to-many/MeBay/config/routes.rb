Rails.application.routes.draw do
  root 'products#index'

resources :sellers
resources :buyers
resources :products

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
