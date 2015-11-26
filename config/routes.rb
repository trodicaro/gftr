Rails.application.routes.draw do
    root 'pages#index'
    get 'users/new' => 'users#new'
    post 'users', to: 'users#create'
  end
