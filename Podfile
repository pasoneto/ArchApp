require_relative '../node_modules/react-native/scripts/react_native_pods'
require_relative '../node_modules/react-native-unimodules/cocoapods.rb'
require_relative '../node_modules/@react-native-community/cli-platform-ios/native_modules'

platform :ios, '11.0'

target 'arch' do
  use_unimodules!
  config = use_native_modules!

  use_react_native!(:path => config["reactNativePath"])

  # Uncomment to opt-in to using Flipper
  #
  # if !ENV['CI']
  #   use_flipper!('Flipper' => '0.75.1', 'Flipper-Folly' => '2.5.3', 'Flipper-RSocket' => '1.3.1')
  #   post_install do |installer|
  #     flipper_post_install(installer)
  #   end
  # end
end
