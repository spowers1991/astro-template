export interface CastMember {
  _key: string;
  characterName?: string;
  person: {
    _ref?: string | undefined;        
    name?: string;      
    image?: {
      asset?: {
        url?: string;
      };
    };
  };
}
