class SolutionSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :challenge_id, :explaination, :hints, :questions
end
