Rails.application.routes.draw do
    root 'pages#index'
    get '/circles' to: 'pages#circles'
  end
