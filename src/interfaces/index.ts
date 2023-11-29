export interface UsersResponse {
    total_count: number;
    incomplete_results: boolean;
    items: Array<UserItem>;
}

export interface UserItem {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
    score: number;
}

export interface UserDetail {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
    name: string;
    company: string;
    blog: string;
    location: string;
    email: string | null;
    hireable: boolean | null;
    bio: string;
    twitter_username: string | null;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    created_at: string;
    updated_at: string;

}

export interface Repository{
    repos_url: string;
    url: string;
}

export interface SearchPageProps extends ScreenProps {
    user: UsersResponse | null;
    setUser: React.Dispatch<React.SetStateAction<UsersResponse | null>>;
    setRepository: React.Dispatch<React.SetStateAction<Repository | null>>
};

export interface HistoricPageProps extends ScreenProps {
    userHistoric: Array<string> | null;
    setUserHistoric: React.Dispatch<React.SetStateAction<Array<string> | null>>;
    setRepository: React.Dispatch<React.SetStateAction<Repository | null>>
}

export interface ScreenProps {
    screen: string;
    setScreen: React.Dispatch<React.SetStateAction<string>>;
}

export interface UsersListProps {
    user: UserItem | string | null;
    setRepository: React.Dispatch<React.SetStateAction<Repository | null>>
}