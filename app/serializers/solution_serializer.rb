class SolutionSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :challenge_id, :photo_url, :explaination, :hints, :questions
end
