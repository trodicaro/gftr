class Unsubscribe < ActiveRecord::Base
  validates :email, :presence => {message: "Email address cannot be blank."}, uniqueness: { case_sensitive: false, message: "Thanks, you already signed up!"}, email_format: {message: "Please enter a valid email address."}, on: :create
end
