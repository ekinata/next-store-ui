export type LoginRequest = {
    email: string;
    password: string;
}

export type LoginResponse = {
    token: string;
}

export type RegisterRequest = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}

export type RegisterResponse = {
    token: string;
}

export type ProductResponse = {
    data: ProductResource[];
    links: {
        first: string;
        last: string;
        prev: string | null;
        next: string | null;
    };
    meta: {
        current_page: number;
        from: number;
        last_page: number;
        links: {
            url: string | null;
            label: string;
            active: boolean;
        }[];
        path: string;
        per_page: number;
        to: number;
        total: number;
    };
}

export type CategoryResponse = {
    data: CategoryResource[];
    links: {
        first: string;
        last: string;
        prev: string | null;
        next: string | null;
    };
    meta: {
        current_page: number;
        from: number;
        last_page: number;
        links: {
            url: string | null;
            label: string;
            active: boolean;
        }[];
        path: string;
        per_page: number;
        to: number;
        total: number;
    };
}

export type ProductResource = {
    id: number;
    name: string;
    slug: string;
    meta: string;
    description: string;
    price: number;
    stock: number;
    status: string;
    category: CategoryResource;
    created_at: string;
    updated_at: string;
}

export type CategoryResource = {
    id: number;
    name: string;
    slug: string;
    cover: string;
    meta: string;
    description: string;
    status: number;
    parent_id: number;
    created_at: string;
    updated_at: string;
}