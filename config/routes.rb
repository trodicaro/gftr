Rails.application.routes.draw do
    root 'pages#index'
   
    post '/users', to: 'users#create'
  end
