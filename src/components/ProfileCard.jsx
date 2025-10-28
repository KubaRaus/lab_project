import ProfileParagraph from './ProfileParagraph';

function ProfileCard(profile) {
  return (
      <div className="card shadow-sm h-100">
        {profile.photo && (
          <img 
            src={profile.photo} 
            className="card-img-top" 
            alt={profile.name}
            style={{ height: '200px', objectFit: 'cover' }}
            onError={(e) => { e.target.style.display = 'none'; }}
          />
        )}
        <div className="card-body">
          <h2 className="card-title h5 text-center text-dark border-bottom border-primary pb-2 mb-3">
            Profil użytkownika
          </h2>

          <ProfileParagraph label="Imię" title={profile.name}/>
          <ProfileParagraph label="Email" title={profile.email}/>
          <ProfileParagraph label="Telefon" title={profile.phone}/>
          <ProfileParagraph label="Data urodzin" title={profile.birthDate}/>
          
          {profile.url && (
            <div className="mb-3">
              <strong>URL:</strong>
              <div className="mt-1">
                <a 
                  href={profile.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary text-break"
                >
                  {profile.url}
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
  );
}

export default ProfileCard;