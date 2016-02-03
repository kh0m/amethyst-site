Rails.application.config.middleware.use OmniAuth::Builder do
  provider(
    :auth0,
    '8aaQMduzxMBRIAAi4SWAwbaHc1WGFXRk',
    '0FFw2cN2rzlczkfzjFEniRKLZ8DACgsG6vaqotQJ6F_WNilX8J3sonkrdekbQmec',
    'pinsonault.auth0.com',
    callback_path: "/auth/auth0/callback"
  )
end
