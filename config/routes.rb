Rails.application.routes.draw do
  root 'pages#index'

  get 'users/new' => 'users#new'
  post 'users', to: 'users#create'

  get 'visitors/new' => 'visitors#new'
  post 'visitors', to: 'visitors#create'

  get 'pages/media' => 'pages#media'
  get 'pages/thankyou' => 'pages#thankyou'

#  get 'ideas/index' => 'ideas#index'
  # get '/ideas' => 'ideas#index'
  get 'ideas/one' => 'ideas#one'
  get 'ideas/moreinfo' => 'ideas#moreinfo'
  get 'ideas/thankyou' => 'ideas#thankyou'
  get 'ideas/saveideas' => 'ideas#saveideas'
  get 'ideas/inspireme' => 'ideas#inspireme'
  get 'ideas/ae4lh' => 'ideas#ae4lh'

  post 'clicks', to: "clicks#create"

  PagesController.action_methods.each do |action|
    get "/#{action}", to: "pages##{action}", as: "#{action}_page"
  end

  #  IdeasController.action_methods.each do |action|
  #   get "/#{action}", to: "ideas##{action}", as: "#{action}_page"
  # end
end
