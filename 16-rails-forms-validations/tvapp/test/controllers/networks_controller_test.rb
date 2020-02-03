require 'test_helper'

class NetworksControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get networks_index_url
    assert_response :success
  end

  test "should get create" do
    get networks_create_url
    assert_response :success
  end

  test "should get new" do
    get networks_new_url
    assert_response :success
  end

  test "should get editshow" do
    get networks_editshow_url
    assert_response :success
  end

  test "should get update" do
    get networks_update_url
    assert_response :success
  end

  test "should get destroy" do
    get networks_destroy_url
    assert_response :success
  end

end
