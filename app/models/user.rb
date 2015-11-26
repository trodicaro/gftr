class User < ActiveRecord::Base
	validates :email, :presence => {message: "Email address cannot be blank.", email_format: {message: "Please enter a valid email address."}, on: :create}
	# validates :email, uniqueness: true
#	validates :email, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i, message: "Please enter a valid email address.", on: :create }
end
