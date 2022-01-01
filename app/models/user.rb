class User < ApplicationRecord
    has_many :solutions
    has_many :challenges, through: :solutions

    has_secure_password


    validates :username, uniqueness: { case_sensitive: false }
     validates :password_digest, presence: true


end


  