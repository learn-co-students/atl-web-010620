require 'test_helper'

class AllergiesControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get allergies_new_url
    assert_response :success
  end

  test "should get create" do
    get allergies_create_url
    assert_response :success
  end

end
