class ChallengeSerializer < ActiveModel::Serializer
  attributes :id, :title, :question, :photo_url
end
