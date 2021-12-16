class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :bio, :avatar_url
end
