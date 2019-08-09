import Link from 'next/link'
import Router from 'next/router'
import React, { ChangeEvent, FC, ReactElement, useCallback } from 'react'
import { normalize } from '../../../lib/search'
import { getTitle } from '../../../lib/title'
import SearchForm from '../../molecules/search-form'

interface HeaderProps {
  query: string
}

const Header: FC<HeaderProps> = ({ query }): ReactElement => {
  const title = getTitle()

  const handleChange = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement>): void => {
      const query = normalize(target.value)

      Router.replace(query ? `/search?q=${encodeURIComponent(query)}` : '/')
    },
    []
  )

  return (
    <>
      <header className="header">
        <div className="header__content">
          <h1 className="title">
            <Link href="/">
              <a aria-label={title} className="title__link" tabIndex={-1}>
                <svg
                  className="title__logo"
                  height="48"
                  viewBox="0 0 120 48"
                  width="120"
                >
                  <path d="M45.013 33.818c.14 0 .28-.1.28-.22 0-.04-.02-.08-.04-.12l-.84-2.215c-.04-.14-.141-.16-.201-.16-.04 0-.12.02-.16.16l-.762 1.956h-1.503c.28-1.576.36-2.834.36-2.874 0-.12-.06-.16-.12-.18l-2.163-.478c-.12 0-.18.08-.18.22 0 1.217-.041 2.314-.121 3.312h-3.948l-.26-2.634a.276.276 0 0 0-.24-.24l-1.604-.259h-.06c-.06 0-.16.02-.16.18l.36 2.953h-3.085a.29.29 0 0 0-.28.3c0 .16.14.299.28.299h3.146l.46 3.672c0 .08.1.16.221.16h.02l1.443-.18c.04-.02.1-.04.14-.1.02-.04.04-.1.04-.14l-.36-3.412h3.827c-.3 2.933-1.142 5.189-3.186 7.823-.04.06-.06.1-.06.16 0 0 0 .199.22.199.06 0 .12-.02.18-.06 2.585-1.776 4.188-4.41 5.01-8.122h3.346zM65.012 35.794c.08 0 .14-.08.14-.16l-.14-.878c-.02-.1-.1-.16-.2-.16l-10.2.12c-.06 0-.12.06-.12.12v.04l.14.778c.02.1.1.16.18.16l10.2-.02zM87.209 35.794c.16 0 .24-.16.24-.28 0-.02-.02-.06-.02-.08l-.821-2.195c-.06-.12-.14-.14-.18-.14-.04 0-.12.02-.2.14l-.762 1.956H82.3c.08-.519.1-1.058.16-1.597l.02-.22v-.04c0-.079-.06-.139-.14-.159l-1.644-.439h-.04c-.1 0-.2.06-.22.2 0 .878-.02 1.317-.08 2.255h-5.31c-.16 0-.26.14-.26.3 0 .139.1.299.26.299h5.27c-.26 2.295-1.443 4.01-3.968 5.827a.18.18 0 0 0-.06.14c0 .16.16.16.18.16.12 0 2.505-.78 3.968-2.276.882-.918 1.423-2.055 1.723-3.552l.06-.3h4.99zm-4.89-6.606c-.06-.04-.12-.08-.16-.08-.06 0-.08.02-.12.06-1.042 1.397-3.707 3.193-5.49 3.712-.1.02-.16.12-.16.2 0 .06.02.18.2.18 3.446-.04 7.314-2.416 7.314-2.815 0-.06-.02-.12-.06-.16l-1.523-1.097zM22.903 14.987l.36-.407c.049-.048.049-.096.049-.144 0-.072-.048-.12-.097-.168-.264-.263-1.538-1.389-1.779-1.389-.072 0-.12.048-.168.168-.217.48-.457.958-.698 1.39-.24-.025-.48-.025-.721-.025a9.43 9.43 0 0 0-2.284.264c.096-.647.264-1.365.432-2.084h6.733c.145 0 .24-.048.313-.12a.215.215 0 0 0 .024-.12c0-.047 0-.095-.024-.143l-1.082-2.682a.23.23 0 0 0-.216-.168c-.049 0-.145.024-.217.192l-1.01 2.323H18.19c.216-.647.385-1.293.65-1.988v-.048a.256.256 0 0 0-.145-.215C17.949 9.43 17.18 9.192 16.53 9h-.072c-.145 0-.29.144-.722 2.874h-3.775a.379.379 0 0 0-.385.383c0 .191.193.335.385.335h3.679c-.12.934-.193 1.82-.216 2.682-4.377 1.7-4.425 4.502-4.425 4.79 0 1.27 1.106 2.155 2.549 2.155 1.49 0 2.934-.862 3.198-1.03.409.623.962 1.174 1.226 1.174.097 0 .145-.048.145-.12 0-.024 0-.048-.024-.096a9.546 9.546 0 0 1-.505-1.532c1.274-.934 2.693-2.395 4.52-4.622 1.323.718 1.948 1.892 1.948 3.16 0 3.378-2.91 5.126-4.376 5.724-.193.072-.265.192-.265.288 0 .143.12.263.313.263.553 0 6.564-1.533 6.564-5.891 0-1.509-.649-3.065-2.765-4.239l-.625-.311zm-6.709 5.173c-.938.79-1.78 1.197-2.356 1.221-.794 0-1.275-.431-1.275-1.197 0-.887.673-2.778 2.885-3.88.049 1.46.29 2.802.746 3.856zm3.847-4.718c-.865 1.437-1.779 2.682-2.717 3.64-.024-.36-.048-.742-.048-1.15 0-.694.048-1.484.168-2.322a7.385 7.385 0 0 1 1.78-.216c.264 0 .553 0 .817.048zM35.575 19.657a.409.409 0 0 0 .168-.312c0-.095-.024-.287-.312-.287a.539.539 0 0 0-.24.072l-2.55 1.58a13.36 13.36 0 0 1-.408-3.304c0-.958.096-1.916.312-2.874 0-.048.024-.072.024-.12 0-.144-.072-.263-.216-.311l-2.044-.982c-.024-.024-.072-.024-.096-.024-.337 0-.553 2.347-.553 4.12 0 3.112.673 5.675 1.202 5.675.048 0 .096-.024.144-.048l4.57-3.185zm4.785-1.078c-.024-.12-.096-.168-.192-.168 0 0-1.106.36-1.202.431-.24.168-.289.384-.289.647 0 .718.385 3.592 4.882 3.592.937 0 1.73-.143 2.044-.263.168-.048.24-.144.24-.24 0-.024 0-.215-.337-.215-3.005-.12-4.52-1.341-4.881-2.706l-.265-1.078zm2.573-3.4c.097-.024 3.15-1.03 3.15-1.03.169-.072.289-.168.289-.288 0-.071-.024-.143-.096-.24l-.794-1.173a.265.265 0 0 0-.24-.143c-.048 0-.12.024-.193.096 0 0-.312.287-.697.718h-5.747c-.168 0-.385.216-.385.407 0 .168.193.335.361.335h5.098l-.842.934c-.072.072-.144.144-.144.24 0 .048.024.143.168.143h.072zM62.964 16.807c.168 0 .288-.12.288-.263a.338.338 0 0 0-.048-.144l-.986-2.347c-.072-.144-.144-.168-.216-.168a.23.23 0 0 0-.216.168l-.914 2.083H58.9c.024-.239.024-.478.024-.67v-.575c0-.503.024-1.197.024-2.06h4.016c.144 0 .288-.143.288-.263a.339.339 0 0 0-.048-.143l-.986-2.395c-.072-.144-.144-.144-.216-.144-.048 0-.144.024-.216.144l-.914 2.107h-1.9c0-.958.024-1.676.024-2.25 0-.12-.024-.216-.192-.24-2.477-.431-2.549-.431-2.573-.431-.096 0-.168.095-.168.191v.024c.096.79.168 1.605.24 2.706H52.12a.343.343 0 0 0-.337.335c0 .168.145.36.337.36h4.232c.072 1.15.12 2.179.169 3.304h-4.401a.343.343 0 0 0-.337.336c0 .167.145.335.337.335h4.425c.024.503.024.958.024 1.365 0 .407 0 .766-.024 1.125-4.184 0-5.363 1.749-5.363 3.066v.048c0 .311.265 2.514 3.198 2.514 1.467 0 3.727-.527 4.208-4.718 1.107.312 2.645 1.461 3.223 1.82a.466.466 0 0 0 .24.072c.337 0 .385-.263.385-.359 0-.646-2.982-2.107-3.751-2.299 0-.024.096-1.293.168-2.634h4.112zm-6.493 3.209c-.192 3.065-1.13 4.047-1.995 4.047-.914 0-1.395-.766-1.395-1.604 0-.982 1.346-2.443 3.246-2.443h.144zM81.954 17.597c.096 0 .168-.096.168-.191l-.168-1.054a.234.234 0 0 0-.24-.192l-12.24.144c-.072 0-.145.072-.145.144v.048l.169.934c.024.12.12.191.216.191l12.24-.024zM105.711 22.22c-1.082.287-2.164.598-3.102.598-2.236 0-2.476-1.964-2.476-3.066 0-1.34.384-3.184 1.298-5.795.024-.024.024-.072.024-.096 0-.095-.048-.191-.144-.215 0 0-2.164-1.102-2.308-1.174-.049-.024-.097-.047-.145-.047-.072 0-.12.071-.144.191l-.289 1.46c-1.61.863-3.799 2.012-6.035 3.234l.312-3.544h2.621c.24 0 .313-.192.313-.264 0-.048-.024-.096-.048-.168l-1.01-2.346c-.072-.144-.168-.168-.216-.168-.048 0-.169.024-.24.168l-.915 2.107h-.456l.192-2.299a.305.305 0 0 0-.168-.287l-2.02-.743c-.024-.024-.048-.024-.072-.024-.073 0-.12.048-.145.144l-.264 3.21h-3.8c-.192 0-.336.167-.336.358 0 .168.144.312.337.312h3.75l-.432 4.98c-1.467.815-2.429 1.39-4.304 2.467-.12.048-.169.12-.169.216 0 .072.048.144.096.215l.626.67c.144.145.264.264.36.264.024 0 .073-.024.12-.072l.265-.335c.577-.742 1.347-1.293 2.188-1.916l.722-.383-.265 3.066c0 .12.072.24.192.263l2.02.455h.072c.097 0 .145-.048.145-.144l.433-5.077 5.94-3.256c-.241 1.604-.386 2.993-.386 4.166 0 2.467.626 4.67 3.607 4.67 1.203 0 2.669-.407 4.377-1.293a.28.28 0 0 0 .168-.263c0-.12-.096-.24-.216-.24h-.073z" />
                </svg>
              </a>
            </Link>
          </h1>

          <SearchForm onChange={handleChange} query={query} />
        </div>
      </header>

      <style jsx>{`
        .header {
          background-color: #fff;
          border-bottom: 1px solid #e0e0e0;
          height: 60px;
          left: 0;
          position: fixed;
          right: 0;
          top: 0;
          z-index: 2;
        }

        .header__content {
          align-items: center;
          box-sizing: border-box;
          display: flex;
          height: 100%;
          justify-content: space-between;
          line-height: 1;
          margin: 0 auto;
          max-width: 1024px;
          padding: 0 0.5rem 0 0;
        }

        @media (min-width: 500px) {
          .header__content {
            padding: 0.5rem 1rem;
          }
        }

        .title {
          font-size: 1.5rem;
          font-weight: 700;
          padding: 0;
          margin: 0 1rem 0 0;
        }

        @media (min-width: 500px) {
          .title {
            margin: 0.5rem 1rem 0 0;
          }
        }

        .title__link {
          color: inherit;
          display: block;
          -webkit-tap-highlight-color: transparent;
          text-decoration: none;
        }

        .title__link:focus {
          outline: 0;
        }

        .title__logo {
          border: 0;
          display: block;
          fill: currentColor;
        }
      `}</style>
    </>
  )
}

export default Header
