class User < ApplicationRecord
    has_many :solutions
    has_many :challenges, through: :solutions


    validates :username, presence: true
    validates :password_digest, presence: true
end
