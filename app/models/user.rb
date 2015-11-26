class User < ActiveRecord::Base
	validates :email, :presence => {message: "Email address cannot be blank.", email_format: {message: "Please enter a valid email address."}, on: :create}
    VALID_EMAIL_REGEX = /\A[\w+\-.]+@akamai\.com\z/i
    validates :email, uniqueness: { case_sensitive: false }, format: {
        with: VALID_EMAIL_REGEX,
        message: "Thanks, you already signed up!"
  }
end