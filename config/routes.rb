Rails.application.routes.draw do
  root 'pages#index'
  get 'users/new' => 'users#new'
  post 'users', to: 'users#create'

  get 'pages/media' => 'pages#media'
end
