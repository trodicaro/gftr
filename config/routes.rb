Rails.application.routes.draw do
    root 'pages#index'
    get 'users/new' => 'users#new'
    post 'users', to: 'users#create'
    get 'pages/media' => 'pages#media'
    get 'pages/thankyou' => 'pages#thankyou'
    
    get 'ideas/index' => 'ideas#index'
    get '/ideas' => 'ideas#index'
    get 'ideas/one' => 'ideas#one'
    get 'ideas/moreinfo' => 'ideas#moreinfo'
    get 'ideas/thankyou' => 'ideas#thankyou'

    PagesController.action_methods.each do |action|
    	get "/#{action}", to: "pages##{action}", as: "#{action}_page"
		end

   #  IdeasController.action_methods.each do |action|
   #  	get "/#{action}", to: "ideas##{action}", as: "#{action}_page"
  	# end
  end
