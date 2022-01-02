class Challenge < ApplicationRecord
    has_many :solutions
    has_many :users, through: :solutions

    validates :title, presence: true
    validates :question, presence: true
end
