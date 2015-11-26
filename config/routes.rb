Rails.application.routes.draw do
    root 'pages#index'
    get '/circles', to: 'pages#circles'
    get '/planning', to: 'pages#planning'
    post '/users', to: 'users#create'
  end
