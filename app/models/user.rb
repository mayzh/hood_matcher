class User < ActiveRecord::Base
  has_secure_password

  Email_Regex = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i

  #validates :password, confirmation: true
  validates :email, presence: true, uniqueness: true, format: Email_Regex
  validates :username, presence: true, uniqueness: true
  validates :password, length: { minimum: 8 }, allow_nil: true
end
