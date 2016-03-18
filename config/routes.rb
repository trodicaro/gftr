Rails.application.routes.draw do
    root 'pages#index'
    get 'users/new' => 'users#new'
    post 'users', to: 'users#create'
    PagesController.action_methods.each do |action|
    	get "/#{action}", to: "pages##{action}", as: "#{action}_page"
  	end
  end
